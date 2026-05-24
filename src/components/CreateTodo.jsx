import { useForm } from "react-hook-form";
import { create } from "../services/services";

function CreateTodo({ getTasks }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    const submitTask = async () => {
      create(values).then(() => {
        getTasks();
      });
    };
    submitTask();
  };

  return (
    <div className="CreateTodo">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p>Task:</p>
          <input
            placeholder="Your task here..."
            type="text"
            name="task"
            {...register("task", { required: true })}
          />
          {errors.note && (
            <div className="error">
              * Note: Tasks field needs to be populated!
            </div>
          )}
        </label>
        <label>
          <p>Student:</p>
          <input
            placeholder="Student's name here..."
            type="text"
            name="student"
            {...register("student", { required: true })}
          />
          {errors.student && (
            <div className="error">
              * Note: Student field needs to be populated!
            </div>
          )}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateTodo;
