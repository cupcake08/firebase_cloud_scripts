enum SearchOptions {
    Team = "team",
    User = "user",
}

enum TeamSearchOptions {
    ID,
    Name,
}

enum UserSearchOptions {
    Name,
    PhoneNumber,
}

export { SearchOptions, TeamSearchOptions, UserSearchOptions };