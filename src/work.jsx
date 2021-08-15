import { NavBar } from "./navbar";
import { HeaderText } from "./header-text";
import segmed from "./resources/segmed.png";

export const Work = () => {
  const jobs = [
    {
      company: "Segmed",
      logo: segmed,
      title: "Software Engineer Intern",
      date: "may '21 — aug '21",
      description: [
        "• Built core functionalities and caching systems of RESTful microservices in Golang for querying medical imaging data along with various API endpoints using mux HTTP router, Redis caching, and structured unit tests.",
        "• Delivered live, production-level features including the DICOM viewer, the usage analytics dashboard, and the regex parsing formatter for cleaned datasets valued at $200,000+ in React with TypeScript, Go, and Tailwind.",
        "• Improved data pipeline efficiency by up to 35% at the processing stage by introducing a multi-layer OCR model utilizing the EAST detection scheme with OpenCV and PyTesseract for the redaction of private health info.",
        "• Automated PostgreSQL procedures with cron jobs, and wrote migration scripts to reduce querying round-trips tenfold.",
      ],
    },
  ];

  return (
    <div className="bg-secondary">
      <NavBar active={"Work"} />
      <div className="absolute left-1/6 right-1/12 top-24 lg:w-2/3 w-auto">
        <HeaderText text="employment" />
        <div className="mb-32">
          {jobs.map((job) => (
            <div className="flex flex-col mt-10 font-open-sans sm:items-stretch items-center lg:w-2/3 w-5/6 space-y-10">
              <div className="flex sm:flex-row flex-col sm:space-x-4 items-center">
                <img src={segmed} alt="" className="h-12 w-12" />
                <div className="flex flex-col sm:items-start items-center">
                  <h3 className="font-semibold sm:text-xl text-lg">
                    {job.company}
                  </h3>
                  <h6 className="lg:text-base text-xs">{job.title}</h6>
                </div>
                <h3 className="sm:text-lg text-xs sm:self-start self-center text-right flex-grow">
                  <i
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 60%, #FFD0AE 60%)",
                      display: "inline",
                    }}
                  >
                    {job.date}
                  </i>
                </h3>
              </div>
              <ul className="lg:ml-16 sm:text-semi-sm text-xs space-y-2">
                {job.description.map((point) => (
                  <li>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
