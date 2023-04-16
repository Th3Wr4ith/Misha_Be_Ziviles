import org.junit.jupiter.api.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class HeaderTest extends BaseTest {
    @Test
    void header() {
        MainPageHeader mainPageHeader = new MainPageHeader(driver);

        mainPageHeader.visibleLogo();
        mainPageHeader.visibleGreeting();

        WebElement searchButton = mainPageHeader.setSearchButton();
        new WebDriverWait(driver, Duration.ofSeconds(3)).until(ExpectedConditions.visibilityOf(searchButton)).click();

        mainPageHeader.setCloseSearch();
        mainPageHeader.visibleNotification();
        mainPageHeader.visibleAvatar();
    }
}
