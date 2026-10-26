#!/bin/sh
# Checks that Claude Code can rate answers with your Claude subscription.
echo 'Is "minulla on kaksi lapsi" correct Finnish? Give the corrected form.' | claude -p --output-format json \
  --json-schema '{"type":"object","properties":{"correct":{"type":"boolean"},"fix":{"type":"string"}},"required":["correct","fix"],"additionalProperties":false}' \
  --tools "" --no-session-persistence --model opus | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const r=JSON.parse(s);console.log(r.is_error?"ERROR: "+r.result:"OK: "+JSON.stringify(r.structured_output??r.result))})'
