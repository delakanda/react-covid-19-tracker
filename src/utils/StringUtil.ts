export function replaceUnderscores(str: string | null | undefined) {
  if(str) {
    return str.replace(/_/gi, ' ');
  }

  return null;
}