import { ChecklistCard } from "@/components/cards/ChecklistCard";
import { PageShell } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { LabPage } from "@/content/pages";

interface LabPageContentProps {
  page: LabPage;
}

export function LabPageContent({ page }: LabPageContentProps) {
  return (
    <PageShell
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      cta={page.cta}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {page.sections.map((section) =>
          section.items ? (
            <ChecklistCard
              key={section.title}
              title={section.title}
              description={section.body}
              items={section.items}
            />
          ) : (
            <Card key={section.title} className="h-full">
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                {section.body ? (
                  <CardDescription>{section.body}</CardDescription>
                ) : null}
              </CardHeader>
              {section.body ? null : <CardContent />}
            </Card>
          ),
        )}
      </div>
    </PageShell>
  );
}
