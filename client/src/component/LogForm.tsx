import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/Form";
import { Button } from "./ui/Button";
import { useForm } from "react-hook-form";
import { Input } from "./ui/Input";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

interface LogData {
  level: string;
  message: string;
  resourceId: string;
  timestamp: string;
  traceId: string;
  spanId: string;
  commit: string;
  parentResourceId: string;
}

const Search = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      level: "",
      message: "",
      resourceId: "",
      timestamp: "",
      traceId: "",
      spanId: "",
      commit: "",
      parentResourceId: "",
    },
  });

  const { mutate: createLog } = useMutation({
    mutationFn: async ({
      level,
      message,
      resourceId,
      timestamp,
      traceId,
      spanId,
      commit,
      parentResourceId,
    }: LogData) => {
      const payload = {
        level,
        message,
        resourceId,
        timestamp,
        traceId,
        spanId,
        commit,
        parentResourceId,
      };
      const { data } = await axios.post(
        "http://localhost:3000/api/v1/logs",
        payload
      );
      return data;
    },
    onSuccess: async () => {
      form.reset();
      navigate("/");
    },
  });
  return (
    <>
      <div className="flex flex-row justify-center gap-8 mt-6 text-lg font-medium ">
        Create Log
        <NavLink to="/">
          <Button variant={"secondary"}>Back</Button>
        </NavLink>
      </div>
      <div className="flex flex-row justify-center mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => createLog(data))}
            className="space-y-4 w-2/6"
          >
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter by Level</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter by Message</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resourceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter by Resource ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Your Resource ID " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="timestamp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter By TimeStamp</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter TimeStamp"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="traceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter By Truce Id</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter TraceID" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="spanId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter By SpanId</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter SpanId" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="commit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter By commit</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter commit" {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="parentResourceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filter By ParentResourceId</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter ParentResourceId"
                      {...field}
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};
export default Search;
