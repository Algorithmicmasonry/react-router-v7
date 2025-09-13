import { ArrowRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Link } from "react-router";
import SmallTitle from "~/components/global/small-title";
import { CustomLinkButton } from "~/components/global/custom-link-button";

export default function HeroSection() {
  return (
    <section className=" pt-[80px] w-full flex items-center justify-center ">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <SmallTitle title=" Welcome to quiqPass (v1)" />
        <h1 className="text-5xl font-bold tracking-tighter max-w-3xl mx-auto">
          Get Your Exit Pass With just a few clicks.
        </h1>

        <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-lg">
          Tired of walking under the sun and chasing down staff for a signature?
          quiqPass digitizes the entire university exit pass process, allowing
          students to submit and track passes from their phones. Spend less time
          waiting and more time on what matters.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full h-12 px-6 text-base"
          >
            <Link to="/register">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
            <CustomLinkButton title="Login" href="/login" />
        </div>
      </div>
    </section>
  );
}
