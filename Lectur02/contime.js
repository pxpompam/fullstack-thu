const registrationDate = new Date ('2025-09-17T10:00:00Z')

const option = {
    year: 'numeric',
    mounth: 'long',
    day: 'numeric',
    timezone: 'Asia/Bangkok'
};

const formattedDate =
    registrationDate.toLocaleDateString('th-TH',option);

    console.log(`Date:`, formattedDate);