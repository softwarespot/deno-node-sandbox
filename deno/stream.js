// Stream JSON lines

import { JsonParseStream } from "@std/json/parse-stream";
import { TextLineStream } from "@std/streams/text-line-stream";

const readable = Deno.stdin.readable
  .pipeThrough(new TextDecoderStream())
  .pipeThrough(new TextLineStream())
  .pipeThrough(new JsonParseStream());

for await (const line of readable) {
  console.log(line);
}
