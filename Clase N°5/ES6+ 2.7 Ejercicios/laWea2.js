function downloadData(url) {}

async function getProcessedData(url) {
    try {
        var response = await downloadData(url);
        return await response.processDataInWorker(url);  
    }
    catch(error) {
        downloadFallbackData(url)
        console.log(error)
    }   
}