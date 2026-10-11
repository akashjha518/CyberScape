# Manual testing checklist

## Mission generation
- Generate missions for each supported topic.
- Verify duration, difficulty, and topic match the selections.
- Check that instructions describe a real, safe outdoor observation.
- Check for variation in title, activity, and learning objective.
- Verify safety boundaries are present.

## Reflection validation
- Submit random characters.
- Submit the same answer in all fields.
- Submit grammatical but unrelated answers.
- Submit a meaningful, mission-relevant reflection.
- Confirm rejected answers do not change XP, completion count, or history.
- Confirm a valid reflection earns 10 XP once and appears in history.

## Persistence and errors
- Refresh the browser and confirm progress persists.
- Trigger an Ollama/backend failure and confirm an understandable error appears.
- Restart Ollama/backend and verify retry works.
- Confirm submission cannot award progress twice during one analysis.

## Release hygiene
- Check `git status`.
- Ensure no `.env` secrets, credentials, virtual environments, `node_modules`, or large model files are committed.
- Review setup commands against the actual project files.
