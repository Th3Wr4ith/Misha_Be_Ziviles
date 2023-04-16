import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class MainPageHeader extends PageObject {
    @FindBy(xpath = "//*[@id=\"root\"]/div/header/div/div/p/img")
    private WebElement logo;

    @FindBy(xpath = "//*[@id=\"root\"]/div/header/div/div/h6")
    private WebElement greeting;

    @FindBy(xpath = "//*[@id=\"root\"]/div/header/div/div/div/button[1]")
    private WebElement searchButton;

    @FindBy(xpath = "//*[@id=\"root\"]/div[1]/header/div/div/div/div/button[2]")
    private WebElement closeSearch;

    @FindBy (css = "#root > div > header > div > div > div > button:nth-child(2)")
    private WebElement notification;

    @FindBy (css = "#root > div > header > div > div > div > button:nth-child(3)")
    private WebElement avatar;


    public MainPageHeader(WebDriver driver) {
        super(driver);
    }

    public void visibleLogo() {
        logo.isDisplayed();
    }

    public void visibleGreeting() {
        greeting.isDisplayed();
    }

    public WebElement setSearchButton() {
        if (searchButton.isDisplayed()) {
            searchButton.click();
        }
        return searchButton;
    }

    public void setCloseSearch(){
        closeSearch.click();
    }

    public void visibleNotification() {
        notification.isDisplayed();
    }

    public void visibleAvatar() {
        avatar.isDisplayed();
    }
}

