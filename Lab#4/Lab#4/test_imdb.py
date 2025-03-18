from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Setup: Launch browser
driver = webdriver.Firefox()
driver.get("https://www.imdb.com")


# Step 1: Find the search box and enter a movie name

search_box = driver.find_element(By.CSS_SELECTOR, "input[type='text']")
assert search_box.is_displayed(), "Test Failed: Search Box not found!"
print('Search box present!')
search_box.send_keys("The Batman")
search_box.send_keys(Keys.RETURN)  # Press Enter

time.sleep(2)  # Wait for results to load

# Step 2: Click the first search result
first_result = driver.find_element(By.CLASS_NAME, "ipc-metadata-list-summary-item__t")

print(f'First search result: {first_result.text}')

# TODO Assert finding 'The Batman' Movie 
# Step 1: Click on the first search result to open the movie page.
first_result.click()
# Step 2: Wait for the page to fully load.
# Step 3: Locate the movie title on the new page.
elem = WebDriverWait(driver, 30).until(
EC.presence_of_element_located((By.CLASS_NAME, "hero__primary-text")) 
)
# Step 4: Verify that the movie title matches the original search query.
movie_title =  driver.find_element(By.CLASS_NAME, "hero__primary-text")
# Step 5: Use an assert statement to check if the correct movie page opened.
try:
    assert movie_title.text == "The Batman"
    print("Test Passed: IMDb search works correctly!")
    assert driver.current_url == "https://www.imdb.com/title/tt1877830/?ref_=fn_all_ttl_1"
    driver.quit()
except:
    print("Test Failed: IMDb search doesn't works correctly!")
# Cleanup: Close the browser
    driver.quit()
