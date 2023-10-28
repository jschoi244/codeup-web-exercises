async function getLastCommit(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: {
                'Authorization': 'Bearer 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'
            }
        });

        if (response.ok) {
            const data = await response.json();
            // Find the last commit event and extract its date
            const lastCommitEvent = data.find(event => event.type === 'PushEvent');

            if (lastCommitEvent) {
                const lastCommitDate = new Date(lastCommitEvent.created_at);
                return lastCommitDate;
            } else {
                return 'No recent commit events found.';
            }
        } else {
            throw new Error(`Failed to fetch data: ${response.status}`);
        }
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

// Example usage
getLastCommit('jschoi244')
    .then(lastCommitDate => {
        console.log('Last commit date:', lastCommitDate);
    })
    .catch(error => {
        console.error('Error:', error);
    });
