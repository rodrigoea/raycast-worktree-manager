/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Root path - Folder to scan for Git repos and worktrees */
  "roots": string,
  /** Open with - App to open worktree (e.g. Cursor, VS Code) */
  "openWith"?: import("@raycast/api").Application,
  /** Default worktree path - Folder where new worktrees will be created (e.g. reponame-branch) */
  "defaultWorktreePath": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-worktrees` command */
  export type SearchWorktrees = ExtensionPreferences & {}
  /** Preferences accessible in the `create-worktree` command */
  export type CreateWorktree = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-worktrees` command */
  export type SearchWorktrees = {}
  /** Arguments passed to the `create-worktree` command */
  export type CreateWorktree = {}
}

