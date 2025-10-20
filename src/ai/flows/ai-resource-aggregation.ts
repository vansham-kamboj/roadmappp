'use server';

/**
 * @fileOverview This file defines a Genkit flow for aggregating relevant learning resources and detailed written roadmaps for each step in a chosen field.
 *
 * - aggregateResources - A function that handles the resource aggregation process.
 * - AggregateResourcesInput - The input type for the aggregateResources function.
 * - AggregateResourcesOutput - The return type for the aggregateResources function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AggregateResourcesInputSchema = z.object({
  field: z.string().describe('The chosen field (e.g., "front-end development").'),
  step: z.string().describe('The specific step in the roadmap (e.g., "Learn HTML").'),
});
export type AggregateResourcesInput = z.infer<typeof AggregateResourcesInputSchema>;

const AggregateResourcesOutputSchema = z.object({
  resources: z.array(z.string()).describe('A list of relevant learning resources (e.g., URLs, book titles).'),
  roadmapDetails: z.string().describe('A detailed written roadmap for the specified step.'),
});
export type AggregateResourcesOutput = z.infer<typeof AggregateResourcesOutputSchema>;

export async function aggregateResources(input: AggregateResourcesInput): Promise<AggregateResourcesOutput> {
  return aggregateResourcesFlow(input);
}

const aggregateResourcesPrompt = ai.definePrompt({
  name: 'aggregateResourcesPrompt',
  input: {schema: AggregateResourcesInputSchema},
  output: {schema: AggregateResourcesOutputSchema},
  prompt: `You are an AI assistant that aggregates learning resources and provides detailed roadmaps for specific steps in a given field.\n\nGiven the field "{{field}}" and the step "{{step}}", your task is to:

1.  Identify and list relevant learning resources such as online courses, tutorials, documentation, books, and articles.
2.  Create a detailed written roadmap for the specified step, outlining the key concepts, skills to acquire, and potential challenges.
3.  Make sure to include the most important details and sources.
\nField: {{{field}}}
Step: {{{step}}}`,
});

const aggregateResourcesFlow = ai.defineFlow(
  {
    name: 'aggregateResourcesFlow',
    inputSchema: AggregateResourcesInputSchema,
    outputSchema: AggregateResourcesOutputSchema,
  },
  async input => {
    const {output} = await aggregateResourcesPrompt(input);
    return output!;
  }
);
