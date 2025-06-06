const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-16">
      <h1 className="text-white font-cormorant text-5xl md:text-6xl uppercase mb-12 text-center">
        About
      </h1>
      
      {/* Profile Image */}
      <div className="flex justify-center mb-12">
        <img 
          src="/images/me.jpg" 
          alt="Oda Rosenkilde"
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </div>
      
      <div className="max-w-3xl mx-auto space-y-8 text-gray-300 font-poppins">
        <h2 className="text-3xl font-cormorant text-white mb-8">
          I'm Oda. A designer, team player and problem solver.
        </h2>

        <div className="space-y-6">
          <p>
            I have always concidered myself a creative soul, and since i was a child i have been intrigued by computers and technology. I like drawing, painting, knitting, cooking, skiing, hiking and decorating. Front-end is for me the perfect way to combine my passions and interests. As a student, I find myself learning an growing each day.
          </p>

          <p>
            The tools I am using in my studies are Figma for design, Git/GitHub for version control, Postman for API calls, and Visual Studio Code.
          </p>

          <p>
            In addition to the projects listed in my "Work"-page, I also contributed on a collaborative exercise simulating a real work project facilitated by Noroff. In this project our class of 70 students was assigned to design and develop a webpage for the volunteer organisation Mozika Manova Fiainana" (Music makes friends). I was one out of ten people on the design team, and we used Figma and FigJam. This was a very interesting experience, and it was fun learning the process of building a website from start in a large team setting.
          </p>

          <p>
            I am looking forward to developing new skills in my next year of studies, where we are diving deeper into the coding languages and respective frameworks.
          </p>

          <p>
            My long term aspirations are multifaceted. I aim to master advanced frontend technologies like React and Vue.js, and eventually expand my expertise to become a full-stack developer. Contributing to open source projects is a significant goal for me, as it allows for continuous learning and giving back to the community. I am passionate about UX/UI design and intend to specialize in this area to create intuitive and visually appealing applications. Pursuing leadership roles and mentoring fellow developers is another ambition of mine, as I enjoy fostering innovation and collaboration. Ultimately, I aspire to work on impactful projects that make a positive difference in people's lives and stay at the forefront of emerging technologies like WebAssembly and AR. My journey in frontend development is driven by a desire to create meaningful, user-centric web experiences.
          </p>

          <div className="py-8">
            <p className="text-lg italic mb-4">
              This is one of my favourite quotes (by Astrid Lindgren / Pippi Longstocking):
            </p>
            <blockquote className="border-l-4 border-white pl-4 py-2 text-xl font-cormorant">
              "I have never tried that before, so I think I should definitely be able to do that."
            </blockquote>
            <p className="mt-6">
              This resonates so deeply with me because I love to challenge myself, and I prefer to learn by doing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
