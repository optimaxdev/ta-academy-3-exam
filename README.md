# Setup
1. Create a bare clone of the repository.
   (This is temporary and will be removed so just do it wherever.)
    ```bash
    git clone --bare git@github.com:optimaxdev/ta-test-uhc.git
    ```

2. [Create a new private repository on Github](https://github.com/new/) and name it `ta-test-uhc`.

3. Mirror-push your bare clone to your new `ta-test-uhc` repository.
   > Replace `<your_username>` with your actual GitHub username in the url below.

   ```bash
   cd ta-test.git
   git push --mirror git@github.com:<your_username>/ta-test-uhc.git
   ```

4. Remove the temporary local repository you created in step 1.
   ```bash
   cd ..
   rm -rf ta-test-uhc.git
   ```

5. You can now clone your `ta-test-uhc` repository on your machine (in my case in the `code` folder).
   ```bash
   cd ~/code
   git clone git@github.com:<your_username>/ta-test-uhc.git
   ```

6. Add collaborators in "Settings" => "Collaborators" page of your `ta-test-uhc` repository.