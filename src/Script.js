export const updateShelfLife = () => {
    const shelfLifeB2B = parseInt(document.getElementById('shelflife-b2b').value);
    const shelfLifeMT = parseInt(document.getElementById('shelflife-MT').value);
    const shelfLifeChocolate = parseInt(document.getElementById('shelflife-Chocolate').value);

    const productionDate = document.getElementById('production-date').value;
    const productVariant = document.getElementById('product-variant').value;
    let expiredCodes = generateExpiredCode(productionDate, productVariant, shelfLifeB2B, shelfLifeMT, shelfLifeChocolate);

    document.getElementById('expired-code').value = expiredCodes.join('\n');
}

export const generateExpiredCode = (productionDate, productVariant, shelfLifeB2B, shelfLifeMT, shelfLifeChocolate) => {
    let expiredCodes = [];
    const date = new Date(productionDate);
    let expiredDate1, expiredDate2;

    if (productVariant === 'Fullcream B2B') {
        expiredDate1 = addDays(date, shelfLifeB2B);
        expiredCodes.push(`PFS EXP ${formatDate(expiredDate1)}`);
    } else if (productVariant === 'Fullcream MT') {
        expiredDate1 = addDays(date, shelfLifeMT);
        expiredDate2 = addDays(date, shelfLifeChocolate);
        expiredCodes.push(`PFF EXP ${formatDate(expiredDate1)} dan `);
        expiredCodes.push(`PFF EXP ${formatDate(expiredDate2)}`);
    } else if (productVariant === 'Chocolate') {
        expiredDate1 = addDays(date, shelfLifeMT);
        expiredDate2 = addDays(date, shelfLifeChocolate);
        expiredCodes.push(`PFC EXP ${formatDate(expiredDate1)} dan `);
        expiredCodes.push(`PFC EXP ${formatDate(expiredDate2)}`);
    }

    return expiredCodes;
}

export const addDays = (date, days) => {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const formatDate = (date) => {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthAbbreviation = monthNames[monthIndex];
    return `${day}/${monthAbbreviation}/${year}`;
}

export const toggleDarkMode = () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle.checked) {
        enableDarkMode();
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        disableDarkMode();
        localStorage.setItem('darkModeEnabled', 'false');
    }
}

export const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
}

export const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
}

export const updateToggleLabel = () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const toggleLabel = document.querySelector('.toggle-label');
    toggleLabel.textContent = darkModeToggle.checked ? "Mode Terang" : "Mode Gelap";
}

export const toggleOption = () => {
    var optionDiv = document.getElementById("option");
    optionDiv.style.display = "block";
}

export const closeOptions = () => {
    var optionDiv = document.getElementById("option");
    optionDiv.style.display = "none";
}