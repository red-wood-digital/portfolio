import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { TEAM_MEMBERS } from "@/constant";
import Link from "next/link";

export default function OurTeamSection() {
  return (
    <section>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 pb-16 max-w-screen-xl">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-bold text-3xl sm:text-4xl">Meet Our Team</h2>

          <p className="mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat.
          </p>
        </div>

        <div className="mt-16 w-fit mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <DirectionAwareHover
              key={member.id}
              imageUrl={member.image}
              childrenClassName="w-full left-0"
            >
              <div className="flex flex-col items-center justify-center">
                <h4 className="font-bold text-xl">{member.name}</h4>
                <p className="font-normal text-sm">{member.designation}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  {member.socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <Link
                        key={link.media}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="sr-only">{link.media}</span>
                        <Icon />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </DirectionAwareHover>
          ))}
        </div>
      </div>
    </section>
  );
}
