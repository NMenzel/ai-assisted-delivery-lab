# Example Review Comments

## Architecture

This extracts a shared abstraction before there are multiple use cases. Please keep the implementation local until a second caller proves the boundary.

## Security

This logs the raw request payload. Please remove sensitive fields before logging and document which data classes are safe to persist.

## Accessibility

The custom button handles pointer clicks but not keyboard activation. Please use the existing `Button` primitive or implement Enter and Space behavior with visible focus.

## Tests

The test only checks that the component renders. Please add coverage for the disabled state and the accessible name because those are part of the contract.

## Hallucinated API

I do not see this API in the installed framework docs. Please replace it with a verified API or add a source reference.
