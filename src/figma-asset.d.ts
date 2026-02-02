// Type declarations for Figma Make asset imports
// This allows TypeScript to recognize the figma:asset/ protocol
// Note: The figma:asset/ protocol is handled by Figma Make's build system at runtime.
// These declarations help TypeScript understand the import syntax, but exact matching
// may not work due to TypeScript's module resolution limitations with custom protocols.

// Generic declaration for all figma:asset imports
declare module "figma:asset/*" {
  const value: string;
  export default value;
}

