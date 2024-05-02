"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL_ADDRESS, CONTACT_PHONE_NUMBER } from "@/constant";
import { ContactFromValues, contactFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function ContactUsSection() {
  const form = useForm<ContactFromValues>({
    resolver: zodResolver(contactFormSchema),
  });

  function onSubmit(values: ContactFromValues) {
    toast.error("Unable to send mail!", {
      description: `As of now please send email manually at ${CONTACT_EMAIL_ADDRESS}`,
    });
  }

  return (
    <section id="contact-us" className="bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 max-w-screen-xl">
        <div className="gap-x-16 gap-y-8 grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="font-bold text-2xl sm:text-3xl">Contact Us</h2>

            <p className="mt-4 max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally
              independent from manufacturer and other group control gives you
              confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8 text-sm sm:text-base">
              <Link href={`tel:${CONTACT_PHONE_NUMBER}`} className="block">
                {CONTACT_PHONE_NUMBER}
              </Link>

              <address className="mb-2 not-italic">
                Bashundhara, Dhaka, Bangladesh
              </address>

              <Link
                href={`mailto:${CONTACT_EMAIL_ADDRESS}`}
                className="block font-bold text-lg text-red-600 sm:text-2xl"
              >
                {CONTACT_EMAIL_ADDRESS}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white shadow-lg p-8 lg:p-12 rounded-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  name="fullName"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                  <FormField
                    name="email"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@doe.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="phoneNumber"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+8801779698944"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={6}
                          placeholder="Leave your message here..."
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-4 w-full sm:w-auto">
                  Send Email
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
