export function checkImage(url: string) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

