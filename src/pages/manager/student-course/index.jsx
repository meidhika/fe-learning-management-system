import { Link, useLoaderData, useParams } from "react-router-dom";
import StudentItem from "./student-item";

export default function StudentCourseList() {
  const { id } = useParams();
  const course = useLoaderData();

  return (
    <>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Manage Students
          </h1>
          <p className="text-[#838C9D] mt-[1]">
            Keep your employee or student happy
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="#"
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Import File
          </Link>
          <Link
            to={`/manager/courses/students/${id}/add`}
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Add Student
          </Link>
        </div>
      </header>
      <section
        id="CourseList"
        className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
      >
        {course?.students?.map((item) => (
          <StudentItem
            key={item._id}
            id={item._id}
            imageUrl={item.photo_url}
            name={item.name}
          />
        ))}
      </section>
    </>
  );
}
