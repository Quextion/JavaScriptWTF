#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <sys/wait.h>

int value = 100;

int main(int argc, char const *argv[])
{	
	
	int cid = fork();

	if(cid == 0){
		for(int i = 1; i <= 10; i++){
			printf("child -> %d\n",--value);
		}
	}else{
		for(int i = 1; i <= 10; i++){
			printf("parent -> %d\n",++value);
		}
	}

	return 0;
}







