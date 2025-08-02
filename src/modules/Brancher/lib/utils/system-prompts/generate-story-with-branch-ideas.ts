import { aiStoryMock, richStoryMock } from "../mock";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const generateStoryWithBranchIdeas = async (
    text: string, // The original story text
    maxParagraphLength = 100, // The maximum length of each paragraph,
    automaticBranching = false // Whether to automatically generate branches
) => {
    return automaticBranching ? richStoryMock : aiStoryMock;
};

/*
You are to transform a plain text story into an enhanced, immersive narrative, segmenting it into succinct, engaging sections, and outputting the result as a strictly structured JSON object whose structure aligns precisely with the following TypeScript types:

export type BranchIdea = string | IStoryParagraph;

export type IStoryParagraph = {
    paragraphTitle: string;
    paragraphText: string;
    branchIdeas: BranchIdea[];
};

export type IStory = IStoryParagraph[];

Your output must be a single valid JSON array (not object), where each element is an IStoryParagraph, and each IStoryParagraph must include:

- `paragraphTitle`: A creative, appropriate title for the current paragraph/segment.
- `paragraphText`: The enhanced narrative content for this segment, rewritten for vividness, style, sensory detail, and flawless grammar while maintaining the plot.
- `branchIdeas`: An array of exactly 3 elements. Each element is either:
    - A string describing a plausible, divergent narrative idea for this point (10-40 words, vivid/pithy), OR
    - A fully-developed IStoryParagraph (or nested chain) representing a major, genuinely different narrative branch of up to 100 words, using the same structure (with its own paragraphTitle, paragraphText, and branchIdeas). 
    - Only include a full IStoryParagraph branch when you have reasoned, step by step, that a natural, significant divergence from the story's main path exists at this narrative point. Each valid branch must represent a plausible, major alternate path from here, not a minor embellishment.

Additional Details:

- Every branching decision must be the result of careful, step-by-step reasoning—never insert a full branch unless it clearly changes the story's direction and is prompted by a natural narrative opportunity.
- Most entries in branchIdeas should be brief string ideas. Only use a full IStoryParagraph branch for a well-justified, major divergence.
- Each segment must always have exactly 3 entries in branchIdeas.
- Continue segmenting the input until the story is fully and logically decomposed into vivid paragraphs, each ≤maxParagraphLength characters.
- Use natural narrative pauses/breaks to define segment boundaries.
- Ensure all text is immersive, vivid, and proofread.
- Only output the strictly valid array/JSON, with no extra text, markdown, or comments. The output must match the types/casing/capitalization exemplified above and below.

# Steps

1. Read the input storyText and maxParagraphLength.
2. Enhance the prose, breaking the story into logical, engaging paragraphs no longer than maxParagraphLength characters.
3. For each segment, reason step by step about plausible branch points—only embedding a developed IStoryParagraph if a major divergence is justified; in other cases, provide only string branch ideas.
4. For every segment, create a paragraphTitle, paragraphText, and a branchIdeas array of exactly 3 ideas (using the correct types).
5. Output a single JSON array following the IStory/IStoryParagraph/BranchIdea structure precisely.

# Output Format

Output a JSON array (never wrapped in markdown), with each element conforming to the IStoryParagraph interface. 
All string fields must be plain JSON strings. All arrays and nested objects must match the schema.

# Examples

Example Input:

A cat waited by the window every morning. One day, the rain fell quietly and she stared outside for hours.

maxParagraphLength: 120

Example Output:

[
  {
    "paragraphTitle": "Morning Vigil",
    "paragraphText": "Each morning, the little cat waited at the window, gazing into the awakening world as dawn crept quietly in.",
    "branchIdeas": [
      "The cat notices a shadow moving in the garden that piques her curiosity.",
      "A child comes to the window and picks up the cat, distracting her from her vigil.",
      {
        "paragraphTitle": "A Bold Leap",
        "paragraphText": "Today, the rain draws the cat irresistibly. She slips out, fur bristling with excitement. In the garden, she meets a robin trembling under a bush, and together they seek warmth from the storm.",
        "branchIdeas": [
          "The cat and robin encounter a friendly dog, changing the dynamic.",
          "Thunder frightens both, sending them in opposite directions.",
          "The cat decides to seek shelter in the neighbor's shed, discovering strange scents."
        ]
      }
    ]
  },
  {
    "paragraphTitle": "Rainy Reverie",
    "paragraphText": "Raindrops clung to the glass, and today she stared through their watery trails, lost in thought.",
    "branchIdeas": [
      "The cat pushes open the window to explore the rainy world beyond.",
      "A loud clap of thunder startles her, sending her fleeing from the window.",
      "She is joined at the window by another cat, sparking curiosity and uncertainty."
    ]
  }
]

(Real examples should use multiple segments and demonstrate both string and IStoryParagraph branchIdeas as appropriate.)

# Notes

- Never output anything except the required JSON array.
- Each branchIdeas array must always be length 3; most items are string ideas, but at most one may be a full IStoryParagraph narrative branch, if justified.
- All keys/fields must match the provided types exactly (no underscores, no alternate casing).
- Longer or more complex stories should continue with additional paragraphs, maintaining the identical format and nesting as needed.
- If needed, continue decomposing the story and nesting branches until all objectives are met before producing your answer.

REMINDER: The story must be a JSON array of IStoryParagraph objects matching the TypeScript types above, with vivid, creative, and well-proofread content for all fields. Use reasoned judgment for full narrative branches, and ensure all arrays and object fields match the schema precisely. Output only the JSON array.*/

/*
No one remembered when Elliott first began walking backwards.

He was six when it started. His mother, Janine, had thought it was a game. She laughed as he shuffled heel-first across the kitchen tiles, arms out like a tightrope walker. “Silly boy,” she’d called him, ruffling his sandy hair.

But Elliott didn’t stop. He walked backwards to school. He walked backwards in the grocery store, through the park, down Main Street. He bumped into things at first—trash bins, fire hydrants, confused dogs—but soon moved with uncanny precision, as if he could see where he was going.

By the time he was eight, it was all anyone in town talked about.

Some called him a miracle. Others whispered words like weird, troubled, freak. But Elliott just smiled his quiet smile and kept walking backwards.

“It’s like he’s trying to undo something,” said Mrs. Carlin, the old librarian who hadn’t left town in forty years.

“Maybe he’s running from the future,” offered the butcher, as he wrapped cold cuts in paper.

“Maybe,” Janine would mutter, watching him from the porch, hands trembling around a coffee mug, “he’s trying to find something we lost.”

Janine never spoke about the accident.

It had happened the day Elliott turned five. A red truck. A wet road. A scream she couldn’t stop hearing in her dreams. Elliott’s twin brother, Isaac, was gone in seconds. One minute, they were laughing in the yard, and the next—nothing but sirens and silence.

For months, Elliott didn’t speak. He stared out the window for hours, his tiny hands gripping the ledge, as if waiting for Isaac to come back through the trees.

Then, one morning, he got up and started walking backwards.

They took him to doctors. Psychologists. Neurologists. Some said it was trauma. Others said it was just a phase. A few took notes feverishly and asked for follow-ups.

But no one had answers.

At school, Elliott kept up just fine. He read upside-down books. Took tests backwards. Sat in the back of the classroom so he could face the wall and still see the board through a handheld mirror. Somehow, he managed.

Kids teased him, at first. Then got bored. Elliott was polite, quiet, kind. He helped others without being asked. He gave away his lunch if someone forgot theirs. He seemed—peaceful.

But there was always something behind his eyes. Like he was seeing something others couldn’t.

On his twelfth birthday, things changed.

It began with a sound. A hum, low and strange, that no one else seemed to hear. Elliott was sitting on the roof, legs dangling over the edge, watching the sun set in the wrong direction—eastward, as he always did—when the hum started.

It pulsed in his bones, not painful, but... familiar.

He stood, slowly, barefoot on the shingles, and turned around for the first time in years.

Then he began to walk forwards.

Down the roof. Onto the lawn. Through the gate. Toward the woods where Isaac had vanished.

Janine, watching from the window, dropped her mug.

He hadn’t stepped foot in those trees since the accident.

The townsfolk saw him pass. One by one, they followed.

Elliott didn’t speak. Didn’t look back. Just walked, steady and straight, eyes locked on the trail ahead.

The woods were thick with summer. Green leaves whispered secrets as the wind picked up. Birds stopped singing. Shadows danced where light shouldn’t reach.

At the old creek, he stopped.

This was the spot. Janine knew it. She’d found him here once, years ago, kneeling in the mud, whispering Isaac’s name like a prayer.

The hum grew louder.

Elliott stepped into the water.

It didn’t ripple.

He kept walking, deeper, until he was submerged up to his chest. Then neck. Then gone.

Janine screamed. People rushed forward. But when they looked—he wasn’t there.

No splash. No bubbles.

Just the hum.

Then silence.

Three days passed.

Search parties scoured the woods. Divers were brought in. No sign of Elliott.

Janine didn’t sleep. She sat at the creek’s edge, fingers tracing the ripples that never seemed to reach the shore.

On the fourth morning, just before dawn, the water shimmered.

And Elliott emerged.

He was dry.

In his arms, he held a boy.

Identical. Down to the mole on his neck. Down to the scar on his knee.

Isaac.

The twins stood on the bank, holding hands.

The townsfolk gasped.

Janine fell to her knees.

Neither boy said a word. They only looked at each other, as if speaking a language no one else could understand.

After that, Elliott walked normally. So did Isaac.

They never explained what had happened. Elliott simply said, “I had to go back far enough to find him.”

The creek was different now. Deeper. Quieter. Some said it was magic. Others called it cursed.

The town changed, too. People began to listen more. To look at things they’d forgotten. They walked a little slower. Asked questions they’d been afraid to ask.

Elliott and Isaac grew up, side by side, inseparable.

Years later, when Elliott became a teacher, he told his students: “Sometimes we walk backwards because it’s the only way to move forward.”

And in the back of the room, Isaac would nod.

---MIN PARAGRAPH LENGTH: 100---
---MAX PARAGRAPH LENGTH: 200---
Note: I want a moderate amount of branches.
*/
