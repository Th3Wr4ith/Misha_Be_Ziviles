import org.junit.jupiter.api.Test;

public class HeaderTest extends BaseTest {
    @Test
    void header() {
        MainPageHeader mainPageHeader = new MainPageHeader(driver);

        mainPageHeader.visibleLogo();
        mainPageHeader.visibleGreeting();
    }
}
