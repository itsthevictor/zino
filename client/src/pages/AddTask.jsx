import { toast } from "react-toastify";
import { Form, redirect } from "react-router-dom";
import Wrapper from "../assets/Wrappers/Login";
import { mainFetch } from "../utils/customFetch";

export async function addTaskAction({ request }) {
  console.log("started add task action");
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await mainFetch.post("/tasks", data);
    toast.success("Task added", { position: "top-center" });
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg, { position: "top-center" });
    return error;
  }
}

const AddTask = () => {
  return (
    <Wrapper>
      {" "}
      <div className="container">
        <div className="form-container">
          <Form method="post">
            <h3 className="title">add task</h3>
            <div className="input-item">
              <label htmlFor="type">task type</label>
              <select id="type" name="type">
                <option value="type 1">type 1</option>
                <option value="type 2">type 2</option>
                <option value="type 3">type 3</option>
              </select>
            </div>
            <div className="input-item">
              <label htmlFor="info">task info</label>
              <input
                type="textarea "
                id="info"
                placeholder="info"
                name="info"
              />
            </div>
            <button type="submit" className="btn submit-btn">
              submit task
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};
export default AddTask;
