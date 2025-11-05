import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbonbby");
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
    }
  }, [state.succeeded]);

  return (
    <Card className="w-full lg:w-1/2 bg-prussian-blue">
      <CardHeader>
        <CardTitle className="text-xl">Contact Me</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <CardContent className="flex flex-col gap-y-4">
          <div>
            <Label htmlFor="email" className="text-lg">
              Email Address<span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              name="_replyto"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-lg">
              Message<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Type your message here."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end mt-10">
          <Button
            type="submit"
            className="bg-sunglow"
            disabled={state.submitting}
          >
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
