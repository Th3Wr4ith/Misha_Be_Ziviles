import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePageHeader extends PageObject{
    @FindBy (xpath = "//*[@id=\"root\"]/div/header/div/div/h6[1]/img")
    private WebElement logo;

    public HomePageHeader(WebDriver driver) {super(driver); }

    public void visibleLogo() { logo.isDisplayed();}

    }

