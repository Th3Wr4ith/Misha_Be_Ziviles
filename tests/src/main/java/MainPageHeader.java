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
}

