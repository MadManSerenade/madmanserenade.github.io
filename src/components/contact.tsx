import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContactProps {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact = ({
  title = "Contact Us",
  description = "Have a question or need assistance? Reach out through any of the channels below.",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "hello@example.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "(123) 456-7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
  className,
}: ContactProps) => {
  return (
    <section className={cn("py-8 lg:py-16", className)}>
      <div className="container flex flex-col gap-8 p-8 xl:p-12 lg:my-0">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-6xl tracking-tight uppercase">{title}</h1>
        </div>
        <div className="mx-auto max-w-6xl space-y-12">
          {/* <div className="mb-14">
            <p className="text-muted-foreground">{description}</p>
          </div> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-muted/50 p-8">
              <Mail className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{emailLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {emailDescription}
              </p>
              <a href={`mailto:${email}`} className="hover:underline">
                {email}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MapPin className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{officeLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {officeDescription}
              </p>
              <a href="#" className="hover:underline">
                {officeAddress}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <Phone className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{phoneLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {phoneDescription}
              </p>
              <a href={`tel:${phone}`} className="hover:underline">
                {phone}
              </a>
            </div>
            <div className="rounded-xl bg-muted/50 p-8">
              <MessageCircle className="mb-4 size-5 text-muted-foreground" />
              <p className="mb-1 font-medium">{chatLabel}</p>
              <p className="mb-4 text-sm text-muted-foreground">
                {chatDescription}
              </p>
              <a href="#" className="hover:underline">
                {chatLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
