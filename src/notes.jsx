import { NavBar } from "./navbar";

export const Notes = () => {
  const notes = [
    // {
    //   date: "4/25",
    //   // paragraph:
    //   // "I'm at the point where I feel I've explored every nook and cranny of a traditional SWE job at a tech company: front-end, back-end, infra, dev ops, QA, etc. I can't help but feel a bit guilty about not applying my education to a greater extent. The reality is, there is nothing inherently stimulating or challenging about software engineering. It's not difficult and you don't have agency over your own ideas (at least for many years), you tackle tickets (agile and SCRUM style, or whatever the hot new PM jargon is), and you roll out features every once in a long while. I can't help but feel that in big tech, I'll stagnate beyond belief. Because computational algorithms and SWE interviews are all I've ever known, I found myself coping by saying that I wouldn't like a job in quant trading anyways, since the WLB is (allegedly) bad, knowing full well that I wouldn't be able to pass any math/stats-heavy portion of a quant interview. Even in quant dev positions, which are the closest adjacent thing that I could maybe consider myself qualified for, there's inevitably a pure math component that I'm simply not prepared for. Why would anyone sacrifice WLB for 500k out of undergrad (although, some of these trading firms do pay this range to their NG SWEs), right? But even more so recently, I've started to rationalize that in order to hit those fast promotion cycles at the likes of FAANG, you either stay for your entire 20s and into your 30s, or you put in more than 40 hours/week and sacrifice the coveted big tech WLB anyways. This will become especially true as the sheer quantity of FAANG engineers altogether becomes increasingly saturated. Or you could gamble on a hot series C startup and hope your years and years of stock vesting pays off in a firework show IPO, I guess. I've always been ashamed of my weaker pure math background. As a result, I've become afraid of diving into the subject and applying myself further. I'm on a mission to make the most of my last 2 years of college education, going back to the fundamentals (that I mostly failed to retain from my LD stats classes) – calculus, probability theory, statistics, theoretical lin alg to ultimately change the trajectory of my career path before I pigeonhole myself into a mind-numbing SWE job in big tech. I'm taking my first steps by working as a SWE at a quantitative hedge fund, and I'm determined to leverage everything in my power to steer this opportunity in a direction that doesn't resemble a big tech company. Of course, I can always fall back onto SWE in big tech if all else fails. And at the end of the day, life is too short for this bullshit anyway. It's gonna be an amazing summer of self-care. </rant>",
    //   paragraph:
    //     "SWE in big tech is not for me. I will continue to find new avenues of growth.",
    // },
    {
      date: "6/10",
      paragraph: "Transient mental",
    },
    {
      date: "7/24",
      paragraph: "cold is just a mindset",
    },
  ];

  return (
    <div className="w-full h-full flex justify-center">
      <div className="lg:w-card lg:h-card h-card-m md:w-card-m sm:w-card-sm w-card-tn flex bg-eggshell self-center">
        <div className="w-full h-full flex md:flex-row flex-col relative md:pb-14 md:pt-14 pb-8">
          <NavBar active="Notes" />
          <h1 className="mb-5 text-2xl md:mt-0 mt-14 ml-14 w-1/6">Notes</h1>
          <div className="flex-grow flex flex-1 h-full md:mb-5 md:p-14 md:pt-0 pl-14 pr-14 md:pb-0 text-semi-lg space-y-4 justify-start flex-col overflow-scroll">
            {notes.map((note) => (
              <div className="flex sm:flex-row flex-col sm:items-center">
                <div className="flex flex-col items-start">
                  <div className="flex flex-row">
                    <h3 className="sm:text-lg text-base">{note.date}</h3>
                  </div>
                  <p className="text-sm mt-3">{note.paragraph}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
