import { Card, CardContent } from "../components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Vedant Deore",
    role: "Full Stack Developer",
    description:
      "Passionate about building scalable web applications and exploring new technologies.",
    image: "/placeholder.svg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Samyak Raka",
    role: "Frontend Developer",
    description:
      "Specialized in creating beautiful and responsive user interfaces with modern frameworks.",
    image: "/placeholder.svg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Satyajit Shinde",
    role: "Backend Developer",
    description:
      "Expert in building robust backend systems and optimizing database performance.",
    image: "/placeholder.svg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
  {
    name: "Ritesh Borse",
    role: "UI/UX Designer",
    description:
      "Creating intuitive and engaging user experiences through thoughtful design.",
    image: "/placeholder.svg",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export function Team() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We're a passionate team of experts dedicated to revolutionizing
            digital advertising through AI innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="aspect-square relative mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-pink-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.description}</p>
                <div className="flex items-center space-x-4">
                  <Link
                    href={member.social.linkedin}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.github}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.social.twitter}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <Twitter className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
