export interface Profile {
  name: string
  boards: Record<string, boolean>
  sharedBoards: Record<string, boolean>
}
