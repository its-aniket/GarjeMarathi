import React from "react";
import { Trophy } from "lucide-react";

interface TeamMemberProps {
  image: string;
  name: string;
  achievements: string[];
}

const BoardMembers = () => {
  return (
    <div className="mx-6">
      <div className="">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-neutral-600">
            Garje Marathi Global is driven by a passionate team of leaders committed to empowering the Marathi community globally. Our board members bring diverse expertise, innovative thinking, and a deep commitment to social impact and cultural preservation.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="shadow-2xl rounded-xl">
              <TeamMember
                image="/images/BoardMember/4974982.jpg"
                name="Anand Ganu"
                achievements={[
                  
                ]}
              />
            </div>
            <div className="shadow-2xl rounded-xl">
              <TeamMember
                image="/images/BoardMember/5099131.jpg"
                name="Madhav Dabke"
                achievements={[
                 
                ]}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="shadow-2xl rounded-xl max-w-md w-full">
              <TeamMember
                image="/images/BoardMember/4974984.jpg"
                name="Dr. Vijay Talele"
                achievements={[
                  
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, achievements }) => (
  <div className="bg-white p-6 rounded-xl border border-neutral-200">
    <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
      <img src={image} alt={name} className="object-cover w-full h-full" />
    </div>
    <h4 className="text-xl font-semibold text-center mb-4">{name}</h4>
    <div className="space-y-2">
      {achievements.map((achievement, index) => (
        <div key={index} className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="text-sm text-neutral-600">{achievement}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BoardMembers;