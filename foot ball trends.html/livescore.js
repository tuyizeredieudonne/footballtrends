function openTab(event, tabName) {
    let tabContents = document.querySelectorAll('.tab-content');
    let tabs = document.querySelectorAll('.tab');

    tabContents.forEach((content) => {
        content.classList.remove('active');
    });

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}
