export interface DancerInterface {
  Name: string;
  Role: eRole,
  HasPaid: "Yes" | "No",
  DanceClass: DanceClass,
  Notes?: string,
  MemberShip: boolean
}

export enum eRole {
  Leader = 1,
  Follower = 2,
  Both = 3
}

export type DanceClass = {
  ID: string,
  Name: string,
  Level: "A" | "B" | "C" | "D" | "E"
}

