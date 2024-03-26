import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ onSave, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const titleData = title.current.value;
    const descriptionData = description.current.value;
    const dueDateData = dueDate.current.value;

    if (
      titleData.trim() === "" ||
      descriptionData.trim() === "" ||
      dueDateData.trim() === ""
    ) {
      // alert("Please fill all the fields");
      modal.current.open();
      return;
    }

    onSave({
      title: titleData,
      description: descriptionData,
      dueDate: dueDateData,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-1">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-2">
          Please make sure you provide a valid value to every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
