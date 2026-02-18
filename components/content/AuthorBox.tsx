import Image from 'next/image'

interface AuthorBoxProps {
  name?: string
  role?: string
  bio?: string
  avatar?: string
}

export default function AuthorBox({
  name = 'Institut Beauté de Femme',
  role = 'Expert en dermopigmentation',
  bio = 'Notre équipe de professionnels certifiés partage son expertise en maquillage permanent, microblading et techniques de dermopigmentation pour vous accompagner dans votre parcours beauté.',
  avatar,
}: AuthorBoxProps) {
  return (
    <div className="bg-beige-creme rounded-2xl p-6 mt-12">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        {avatar ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gradient-rose flex items-center justify-center flex-shrink-0">
            <span className="text-white font-playfair font-bold text-2xl">
              {name.charAt(0)}
            </span>
          </div>
        )}

        {/* Info */}
        <div className="flex-1">
          <h3 className="font-playfair text-lg font-semibold text-charbon">
            {name}
          </h3>
          <p className="text-sm text-rose-fonce mb-2">{role}</p>
          <p className="text-sm text-charbon/70 leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  )
}
