var init = {
    "host": "localhost",
    "port": "17014",
    "font-size": "50",
    "background-color": "gray",
    "oval-color": "rgb(208,208,208)",
    "text-color": "rgb(48,48,48)",
    "power-consumption-optimisation": "80%",
    "ui-scale": "100%",
    "database": {
        "top-node": "top",
        "queries": [
            {
                "description1": "query pair-nav, ranking by pair-fmi",
                "description2": "forward direction",
                "query": "(pair-nav 'forward (Word \"$word\"))",
                "ranking": "(pair-nav 'edge-score (Word \"$word1\") (Word \"$word2\"))",
            },
            {
                "description1": "query sim-fmi-nav, ranking by sim-fmi",
                "description2": "backward direction",
                "query": "(sim-fmi-nav 'backward (Word \"$word\"))",
                "ranking": "(sim-fmi-nav 'edge-score (Word \"$word1\") (Word \"$word2\"))"
            },
            {
                "description1": "query sim-vmi-nav, ranking by sim-vmi",
                "description2": "forward direction",
                "query": "(sim-vmi-nav 'forward (Word \"$word\"))",
                "ranking": "(sim-vmi-nav 'edge-score (Word \"$word1\") (Word \"$word2\"))"
            }
        ]
    }
};
