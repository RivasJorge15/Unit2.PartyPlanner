const api_url = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events"
const response = await fetch ("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events")
const input = document.querySelector("input[type='date']");


function fetchParties() {
    return fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events')
        .then(response => response.json())
        .then(data => data.parties)
        .catch(error => {
            console.error('Error fetching parties:', error);
            throw error;
        });
}
 
fetchParties()
    .then(parties => {
        console.log('Parties:', parties);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    function deleteParty(partyId) {
        return fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-PT-WEB-PT-A/events${partyId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete party');
            }
            return response.json();
        })
        .then(data => {
            console.log('Party deleted successfully:', data);
        })
        .catch(error => {
            console.error('Error deleting party:', error);
        });
    }

    