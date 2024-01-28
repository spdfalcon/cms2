import Button from "../../../components/module/Button/Button";

export default function Inbox() {
  return (
    <>
      <div className="p-10">
        <Button
          bg="bg-a_primary-100"
          color="text-white"
          hoverbg="hover:bg-white"
          hovercolor="hover:text-a_primary-100"
          size="sm"
          icon="bi bi-alarm"
        ></Button>
      </div>
    </>
  );
}
