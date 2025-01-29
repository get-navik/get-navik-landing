import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CommunityCardProps {
  imageSrc: string
  title: string
  description: string
}

export function CommunityCard({ imageSrc, title, description }: CommunityCardProps) {
  return (
    <Card>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

