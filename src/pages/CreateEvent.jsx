import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CreateEvent = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Create Event</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Event Name</label>
          <Input id="name" {...register("name", { required: true })} />
        </div>
        <div>
          <label htmlFor="date" className="block mb-2">Date</label>
          <Input id="date" type="date" {...register("date", { required: true })} />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <Textarea id="description" {...register("description", { required: true })} />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2">Location</label>
          <Input id="location" {...register("location", { required: true })} />
        </div>
        <Button type="submit">Create Event</Button>
      </form>
    </div>
  );
};

export default CreateEvent;