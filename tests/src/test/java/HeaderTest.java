import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HeaderTest extends BaseTest {
    @Test
    void header() {
        MainPageHeader mainPageHeader = new MainPageHeader(driver);

        mainPageHeader.visibleLogo();
        mainPageHeader.visibleGreeting();
    }
}
