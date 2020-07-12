export const prefixUri = 'sge-thai-template'

export function generateUrl(uri: string): string {
  return `/${prefixUri}${uri}`
}
