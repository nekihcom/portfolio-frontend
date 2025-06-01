import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Card className="flex-1 rounded-none border-x-0 border-t-0 border-b-0">
        <CardHeader className="space-y-4">
          <div className="flex justify-center">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-center font-mono">
              Get started by editing{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded font-mono font-medium">
                src/app/page.tsx
              </code>
            </p>
            <p className="text-center font-mono">
              Save and see your changes instantly.
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3">
            <Button
              className="w-full"
              asChild
            >
              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert mr-2"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full"
              asChild
            >
              <a
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read our docs
              </a>
            </Button>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Separator />
          <div className="flex flex-col gap-3 w-full">
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <a
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-2"
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <a
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-2"
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              asChild
            >
              <a
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="mr-2"
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
