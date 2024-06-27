package main

import (
	"bufio"
	"context"
	"fmt"
	"os"

	"github.com/google/go-github/github"
	"golang.org/x/oauth2"
)

func main() {
	// Prompt user for GitHub username and personal access token
	var username, token string
	fmt.Print("Enter your GitHub username: ")
	fmt.Scanln(&username)
	fmt.Print("Enter your personal access token: ")
	fmt.Scanln(&token)

	// Read the list of repositories to delete
	file, err := os.Open("repos_to_delete.txt")
	if err != nil {
		fmt.Printf("Error opening file: %v\n", err)
		return
	}
	defer file.Close()

	ctx := context.Background()
	ts := oauth2.StaticTokenSource(
		&oauth2.Token{AccessToken: token},
	)
	tc := oauth2.NewClient(ctx, ts)
	client := github.NewClient(tc)

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		repoName := scanner.Text()

		// Delete repository
		_, err := client.Repositories.Delete(ctx, username, repoName)
		if err != nil {
			fmt.Printf("Failed to delete repository %s: %v\n", repoName, err)
		} else {
			fmt.Printf("Successfully deleted repository: %s\n", repoName)
		}
	}

	if err := scanner.Err(); err != nil {
		fmt.Printf("Error scanning file: %v\n", err)
	}
}
