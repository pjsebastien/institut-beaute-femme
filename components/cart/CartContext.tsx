'use client'

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'
import { Product, CartItem, CartState } from '@/types'

interface CartContextType extends CartState {
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  isInCart: (productId: string) => boolean
  getItemQuantity: (productId: string) => number
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product; quantity: number }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; items: CartItem[] }

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'institut-beaute-cart'

function calculateTotals(items: CartItem[]): { totalItems: number; totalPrice: number } {
  return items.reduce(
    (acc, item) => ({
      totalItems: acc.totalItems + item.quantity,
      totalPrice: acc.totalPrice + item.product.price * item.quantity,
    }),
    { totalItems: 0, totalPrice: 0 }
  )
}

function cartReducer(state: CartState, action: CartAction): CartState {
  let newItems: CartItem[]

  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        (item) => item.product.id === action.product.id
      )

      if (existingItem) {
        newItems = state.items.map((item) =>
          item.product.id === action.product.id
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
      } else {
        newItems = [...state.items, { product: action.product, quantity: action.quantity }]
      }

      return {
        items: newItems,
        ...calculateTotals(newItems),
      }

    case 'REMOVE_FROM_CART':
      newItems = state.items.filter((item) => item.product.id !== action.productId)
      return {
        items: newItems,
        ...calculateTotals(newItems),
      }

    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        newItems = state.items.filter((item) => item.product.id !== action.productId)
      } else {
        newItems = state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item
        )
      }
      return {
        items: newItems,
        ...calculateTotals(newItems),
      }

    case 'CLEAR_CART':
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0,
      }

    case 'LOAD_CART':
      return {
        items: action.items,
        ...calculateTotals(action.items),
      }

    default:
      return state
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      if (savedCart) {
        const items = JSON.parse(savedCart) as CartItem[]
        dispatch({ type: 'LOAD_CART', items })
      }
    } catch (error) {
      console.error('Erreur lors du chargement du panier:', error)
    }
  }, [])

  // Sauvegarder le panier dans localStorage à chaque modification
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items))
    } catch (error) {
      console.error('Erreur lors de la sauvegarde du panier:', error)
    }
  }, [state.items])

  const addToCart = (product: Product, quantity = 1) => {
    dispatch({ type: 'ADD_TO_CART', product, quantity })
  }

  const removeFromCart = (productId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const isInCart = (productId: string) => {
    return state.items.some((item) => item.product.id === productId)
  }

  const getItemQuantity = (productId: string) => {
    const item = state.items.find((item) => item.product.id === productId)
    return item?.quantity || 0
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isInCart,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart doit être utilisé dans un CartProvider')
  }
  return context
}
